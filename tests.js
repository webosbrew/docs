import { Validator } from 'jsonschema';
import assert from 'assert';
import repo from './test/repo.json';
import RepositorySchema from './schemas/HomebrewRepository.schema.json';
import PackageManifestSchema from './schemas/HomebrewPackageManifest.schema.json';

const validator = new Validator();
validator.addSchema(RepositorySchema, 'https://webosbrew.org/schema/HomebrewRepository.schema');
validator.addSchema(PackageManifestSchema, 'https://webosbrew.org/schema/HomebrewPackageManifest.schema');
const result = validator.validate(repo, RepositorySchema);


assert.strictEqual(result.errors.length, 0, 'has no error');