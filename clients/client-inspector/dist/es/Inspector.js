import { __extends } from "tslib";
import { InspectorClient } from "./InspectorClient";
import { AddAttributesToFindingsCommand, } from "./commands/AddAttributesToFindingsCommand";
import { CreateAssessmentTargetCommand, } from "./commands/CreateAssessmentTargetCommand";
import { CreateAssessmentTemplateCommand, } from "./commands/CreateAssessmentTemplateCommand";
import { CreateExclusionsPreviewCommand, } from "./commands/CreateExclusionsPreviewCommand";
import { CreateResourceGroupCommand, } from "./commands/CreateResourceGroupCommand";
import { DeleteAssessmentRunCommand, } from "./commands/DeleteAssessmentRunCommand";
import { DeleteAssessmentTargetCommand, } from "./commands/DeleteAssessmentTargetCommand";
import { DeleteAssessmentTemplateCommand, } from "./commands/DeleteAssessmentTemplateCommand";
import { DescribeAssessmentRunsCommand, } from "./commands/DescribeAssessmentRunsCommand";
import { DescribeAssessmentTargetsCommand, } from "./commands/DescribeAssessmentTargetsCommand";
import { DescribeAssessmentTemplatesCommand, } from "./commands/DescribeAssessmentTemplatesCommand";
import { DescribeCrossAccountAccessRoleCommand, } from "./commands/DescribeCrossAccountAccessRoleCommand";
import { DescribeExclusionsCommand, } from "./commands/DescribeExclusionsCommand";
import { DescribeFindingsCommand, } from "./commands/DescribeFindingsCommand";
import { DescribeResourceGroupsCommand, } from "./commands/DescribeResourceGroupsCommand";
import { DescribeRulesPackagesCommand, } from "./commands/DescribeRulesPackagesCommand";
import { GetAssessmentReportCommand, } from "./commands/GetAssessmentReportCommand";
import { GetExclusionsPreviewCommand, } from "./commands/GetExclusionsPreviewCommand";
import { GetTelemetryMetadataCommand, } from "./commands/GetTelemetryMetadataCommand";
import { ListAssessmentRunAgentsCommand, } from "./commands/ListAssessmentRunAgentsCommand";
import { ListAssessmentRunsCommand, } from "./commands/ListAssessmentRunsCommand";
import { ListAssessmentTargetsCommand, } from "./commands/ListAssessmentTargetsCommand";
import { ListAssessmentTemplatesCommand, } from "./commands/ListAssessmentTemplatesCommand";
import { ListEventSubscriptionsCommand, } from "./commands/ListEventSubscriptionsCommand";
import { ListExclusionsCommand, } from "./commands/ListExclusionsCommand";
import { ListFindingsCommand, } from "./commands/ListFindingsCommand";
import { ListRulesPackagesCommand, } from "./commands/ListRulesPackagesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PreviewAgentsCommand, } from "./commands/PreviewAgentsCommand";
import { RegisterCrossAccountAccessRoleCommand, } from "./commands/RegisterCrossAccountAccessRoleCommand";
import { RemoveAttributesFromFindingsCommand, } from "./commands/RemoveAttributesFromFindingsCommand";
import { SetTagsForResourceCommand, } from "./commands/SetTagsForResourceCommand";
import { StartAssessmentRunCommand, } from "./commands/StartAssessmentRunCommand";
import { StopAssessmentRunCommand, } from "./commands/StopAssessmentRunCommand";
import { SubscribeToEventCommand, } from "./commands/SubscribeToEventCommand";
import { UnsubscribeFromEventCommand, } from "./commands/UnsubscribeFromEventCommand";
import { UpdateAssessmentTargetCommand, } from "./commands/UpdateAssessmentTargetCommand";
/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
var Inspector = /** @class */ (function (_super) {
    __extends(Inspector, _super);
    function Inspector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inspector.prototype.addAttributesToFindings = function (args, optionsOrCb, cb) {
        var command = new AddAttributesToFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.createAssessmentTarget = function (args, optionsOrCb, cb) {
        var command = new CreateAssessmentTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.createAssessmentTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateAssessmentTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.createExclusionsPreview = function (args, optionsOrCb, cb) {
        var command = new CreateExclusionsPreviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.createResourceGroup = function (args, optionsOrCb, cb) {
        var command = new CreateResourceGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.deleteAssessmentRun = function (args, optionsOrCb, cb) {
        var command = new DeleteAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.deleteAssessmentTarget = function (args, optionsOrCb, cb) {
        var command = new DeleteAssessmentTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.deleteAssessmentTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteAssessmentTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeAssessmentRuns = function (args, optionsOrCb, cb) {
        var command = new DescribeAssessmentRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeAssessmentTargets = function (args, optionsOrCb, cb) {
        var command = new DescribeAssessmentTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeAssessmentTemplates = function (args, optionsOrCb, cb) {
        var command = new DescribeAssessmentTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeCrossAccountAccessRole = function (args, optionsOrCb, cb) {
        var command = new DescribeCrossAccountAccessRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeExclusions = function (args, optionsOrCb, cb) {
        var command = new DescribeExclusionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeFindings = function (args, optionsOrCb, cb) {
        var command = new DescribeFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeResourceGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeResourceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.describeRulesPackages = function (args, optionsOrCb, cb) {
        var command = new DescribeRulesPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.getAssessmentReport = function (args, optionsOrCb, cb) {
        var command = new GetAssessmentReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.getExclusionsPreview = function (args, optionsOrCb, cb) {
        var command = new GetExclusionsPreviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.getTelemetryMetadata = function (args, optionsOrCb, cb) {
        var command = new GetTelemetryMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listAssessmentRunAgents = function (args, optionsOrCb, cb) {
        var command = new ListAssessmentRunAgentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listAssessmentRuns = function (args, optionsOrCb, cb) {
        var command = new ListAssessmentRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listAssessmentTargets = function (args, optionsOrCb, cb) {
        var command = new ListAssessmentTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listAssessmentTemplates = function (args, optionsOrCb, cb) {
        var command = new ListAssessmentTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listEventSubscriptions = function (args, optionsOrCb, cb) {
        var command = new ListEventSubscriptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listExclusions = function (args, optionsOrCb, cb) {
        var command = new ListExclusionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listFindings = function (args, optionsOrCb, cb) {
        var command = new ListFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listRulesPackages = function (args, optionsOrCb, cb) {
        var command = new ListRulesPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.previewAgents = function (args, optionsOrCb, cb) {
        var command = new PreviewAgentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.registerCrossAccountAccessRole = function (args, optionsOrCb, cb) {
        var command = new RegisterCrossAccountAccessRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.removeAttributesFromFindings = function (args, optionsOrCb, cb) {
        var command = new RemoveAttributesFromFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.setTagsForResource = function (args, optionsOrCb, cb) {
        var command = new SetTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.startAssessmentRun = function (args, optionsOrCb, cb) {
        var command = new StartAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.stopAssessmentRun = function (args, optionsOrCb, cb) {
        var command = new StopAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.subscribeToEvent = function (args, optionsOrCb, cb) {
        var command = new SubscribeToEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.unsubscribeFromEvent = function (args, optionsOrCb, cb) {
        var command = new UnsubscribeFromEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Inspector.prototype.updateAssessmentTarget = function (args, optionsOrCb, cb) {
        var command = new UpdateAssessmentTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return Inspector;
}(InspectorClient));
export { Inspector };
//# sourceMappingURL=Inspector.js.map