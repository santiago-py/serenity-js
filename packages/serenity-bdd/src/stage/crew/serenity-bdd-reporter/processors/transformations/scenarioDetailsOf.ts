import { Path } from '@serenity-js/core/lib/io';
import { ScenarioDetails } from '@serenity-js/core/lib/model';
import { dashify } from '../mappers';
import { SerenityBDDReportContext } from '../SerenityBDDReportContext';

/**
 * @package
 */
export function scenarioDetailsOf<Context extends SerenityBDDReportContext>(details: ScenarioDetails) {

    function isFeatureFile(path: Path) {
        return path && path.value.endsWith('.feature');
    }

    return (context: Context): Context => {
        context.report.name = details.name.value;
        context.report.title = details.name.value;
        context.report.manual = false;
        context.report.testSteps = [];
        context.report.userStory = {
            id: dashify(details.category.value),
            storyName: details.category.value,
            path: isFeatureFile(details.location.path)
                ? details.location.path.value
                : '',
            type: 'feature',
        };

        return context;
    }
}
