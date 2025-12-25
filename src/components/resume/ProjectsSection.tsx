import { useMemo, useState } from 'react'
import { ExternalLink, Filter, Search } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import type { ProjectsSection as ProjectsSectionType } from '@/data/types'
import { cn, toKebabCase } from '@/lib/utils'
import { useSettings } from '@/providers/settings-provider'

interface ProjectsSectionProps {
  data: ProjectsSectionType
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const { atsMode } = useSettings()
  const [searchTerm, setSearchTerm] = useState('')
  const [stackFilter, setStackFilter] = useState('all')

  const allStacks = useMemo(() => {
    const stacks = new Set<string>()
    data.items.forEach((item) => {
      item.stack.forEach((tech) => stacks.add(tech))
    })
    return Array.from(stacks).sort((a, b) => a.localeCompare(b))
  }, [data.items])

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return data.items.filter((item) => {
      const matchesStack = stackFilter === 'all' || item.stack.includes(stackFilter)
      if (!matchesStack) return false
      if (!term) return true
      const haystack = [item.name, item.role, item.summary, item.impact, ...(item.highlights ?? [])]
        .join(' ')
        .toLowerCase()
      return haystack.includes(term)
    })
  }, [data.items, searchTerm, stackFilter])

  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30 dark:border-slate-700 dark:bg-slate-900">
            <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Search projects</span>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, impact, or stack"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
            />
          </label>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <label className="sr-only" htmlFor="stack-filter">
              Filter by stack
            </label>
            <select
              id="stack-filter"
              value={stackFilter}
              onChange={(event) => setStackFilter(event.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="all">All stacks</option>
              {allStacks.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredItems.map((project) => (
            <article
              key={project.name}
              className={cn(
                'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/90',
                atsMode && 'border-slate-300 shadow-none dark:border-slate-700'
              )}
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm font-medium text-slate-500">{project.role}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.link.label}
                  </a>
                )}
              </header>
              <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">{project.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                {(project.highlights && project.highlights.length > 0 ? project.highlights : [project.impact]).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
          {filteredItems.length === 0 && (
            <p className="col-span-full rounded-lg border border-dashed border-slate-200 px-4 py-12 text-center text-sm text-slate-500 dark:border-slate-700">
              No projects found. Adjust your search or filter criteria.
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}
