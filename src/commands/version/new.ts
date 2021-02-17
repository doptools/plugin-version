import { flags } from '@oclif/command'
import { VersionCommand } from './VersionCommand'

export default class VersionNew extends VersionCommand {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(VersionNew)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/vscode/devcontainer-generators/projects/plugin-version/src/commands/version/new.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
