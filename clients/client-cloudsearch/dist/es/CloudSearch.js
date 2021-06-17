import { __extends } from "tslib";
import { CloudSearchClient } from "./CloudSearchClient";
import { BuildSuggestersCommand, } from "./commands/BuildSuggestersCommand";
import { CreateDomainCommand, } from "./commands/CreateDomainCommand";
import { DefineAnalysisSchemeCommand, } from "./commands/DefineAnalysisSchemeCommand";
import { DefineExpressionCommand, } from "./commands/DefineExpressionCommand";
import { DefineIndexFieldCommand, } from "./commands/DefineIndexFieldCommand";
import { DefineSuggesterCommand, } from "./commands/DefineSuggesterCommand";
import { DeleteAnalysisSchemeCommand, } from "./commands/DeleteAnalysisSchemeCommand";
import { DeleteDomainCommand, } from "./commands/DeleteDomainCommand";
import { DeleteExpressionCommand, } from "./commands/DeleteExpressionCommand";
import { DeleteIndexFieldCommand, } from "./commands/DeleteIndexFieldCommand";
import { DeleteSuggesterCommand, } from "./commands/DeleteSuggesterCommand";
import { DescribeAnalysisSchemesCommand, } from "./commands/DescribeAnalysisSchemesCommand";
import { DescribeAvailabilityOptionsCommand, } from "./commands/DescribeAvailabilityOptionsCommand";
import { DescribeDomainEndpointOptionsCommand, } from "./commands/DescribeDomainEndpointOptionsCommand";
import { DescribeDomainsCommand, } from "./commands/DescribeDomainsCommand";
import { DescribeExpressionsCommand, } from "./commands/DescribeExpressionsCommand";
import { DescribeIndexFieldsCommand, } from "./commands/DescribeIndexFieldsCommand";
import { DescribeScalingParametersCommand, } from "./commands/DescribeScalingParametersCommand";
import { DescribeServiceAccessPoliciesCommand, } from "./commands/DescribeServiceAccessPoliciesCommand";
import { DescribeSuggestersCommand, } from "./commands/DescribeSuggestersCommand";
import { IndexDocumentsCommand, } from "./commands/IndexDocumentsCommand";
import { ListDomainNamesCommand, } from "./commands/ListDomainNamesCommand";
import { UpdateAvailabilityOptionsCommand, } from "./commands/UpdateAvailabilityOptionsCommand";
import { UpdateDomainEndpointOptionsCommand, } from "./commands/UpdateDomainEndpointOptionsCommand";
import { UpdateScalingParametersCommand, } from "./commands/UpdateScalingParametersCommand";
import { UpdateServiceAccessPoliciesCommand, } from "./commands/UpdateServiceAccessPoliciesCommand";
/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
var CloudSearch = /** @class */ (function (_super) {
    __extends(CloudSearch, _super);
    function CloudSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSearch.prototype.buildSuggesters = function (args, optionsOrCb, cb) {
        var command = new BuildSuggestersCommand(args);
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
    CloudSearch.prototype.createDomain = function (args, optionsOrCb, cb) {
        var command = new CreateDomainCommand(args);
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
    CloudSearch.prototype.defineAnalysisScheme = function (args, optionsOrCb, cb) {
        var command = new DefineAnalysisSchemeCommand(args);
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
    CloudSearch.prototype.defineExpression = function (args, optionsOrCb, cb) {
        var command = new DefineExpressionCommand(args);
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
    CloudSearch.prototype.defineIndexField = function (args, optionsOrCb, cb) {
        var command = new DefineIndexFieldCommand(args);
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
    CloudSearch.prototype.defineSuggester = function (args, optionsOrCb, cb) {
        var command = new DefineSuggesterCommand(args);
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
    CloudSearch.prototype.deleteAnalysisScheme = function (args, optionsOrCb, cb) {
        var command = new DeleteAnalysisSchemeCommand(args);
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
    CloudSearch.prototype.deleteDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteDomainCommand(args);
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
    CloudSearch.prototype.deleteExpression = function (args, optionsOrCb, cb) {
        var command = new DeleteExpressionCommand(args);
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
    CloudSearch.prototype.deleteIndexField = function (args, optionsOrCb, cb) {
        var command = new DeleteIndexFieldCommand(args);
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
    CloudSearch.prototype.deleteSuggester = function (args, optionsOrCb, cb) {
        var command = new DeleteSuggesterCommand(args);
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
    CloudSearch.prototype.describeAnalysisSchemes = function (args, optionsOrCb, cb) {
        var command = new DescribeAnalysisSchemesCommand(args);
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
    CloudSearch.prototype.describeAvailabilityOptions = function (args, optionsOrCb, cb) {
        var command = new DescribeAvailabilityOptionsCommand(args);
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
    CloudSearch.prototype.describeDomainEndpointOptions = function (args, optionsOrCb, cb) {
        var command = new DescribeDomainEndpointOptionsCommand(args);
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
    CloudSearch.prototype.describeDomains = function (args, optionsOrCb, cb) {
        var command = new DescribeDomainsCommand(args);
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
    CloudSearch.prototype.describeExpressions = function (args, optionsOrCb, cb) {
        var command = new DescribeExpressionsCommand(args);
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
    CloudSearch.prototype.describeIndexFields = function (args, optionsOrCb, cb) {
        var command = new DescribeIndexFieldsCommand(args);
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
    CloudSearch.prototype.describeScalingParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeScalingParametersCommand(args);
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
    CloudSearch.prototype.describeServiceAccessPolicies = function (args, optionsOrCb, cb) {
        var command = new DescribeServiceAccessPoliciesCommand(args);
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
    CloudSearch.prototype.describeSuggesters = function (args, optionsOrCb, cb) {
        var command = new DescribeSuggestersCommand(args);
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
    CloudSearch.prototype.indexDocuments = function (args, optionsOrCb, cb) {
        var command = new IndexDocumentsCommand(args);
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
    CloudSearch.prototype.listDomainNames = function (args, optionsOrCb, cb) {
        var command = new ListDomainNamesCommand(args);
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
    CloudSearch.prototype.updateAvailabilityOptions = function (args, optionsOrCb, cb) {
        var command = new UpdateAvailabilityOptionsCommand(args);
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
    CloudSearch.prototype.updateDomainEndpointOptions = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainEndpointOptionsCommand(args);
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
    CloudSearch.prototype.updateScalingParameters = function (args, optionsOrCb, cb) {
        var command = new UpdateScalingParametersCommand(args);
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
    CloudSearch.prototype.updateServiceAccessPolicies = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceAccessPoliciesCommand(args);
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
    return CloudSearch;
}(CloudSearchClient));
export { CloudSearch };
//# sourceMappingURL=CloudSearch.js.map