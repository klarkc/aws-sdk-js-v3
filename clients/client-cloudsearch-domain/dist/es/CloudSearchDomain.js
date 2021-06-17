import { __extends } from "tslib";
import { CloudSearchDomainClient } from "./CloudSearchDomainClient";
import { SearchCommand } from "./commands/SearchCommand";
import { SuggestCommand } from "./commands/SuggestCommand";
import { UploadDocumentsCommand, } from "./commands/UploadDocumentsCommand";
/**
 * <p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p>
 *
 *          <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p>
 *          <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>
 */
var CloudSearchDomain = /** @class */ (function (_super) {
    __extends(CloudSearchDomain, _super);
    function CloudSearchDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSearchDomain.prototype.search = function (args, optionsOrCb, cb) {
        var command = new SearchCommand(args);
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
    CloudSearchDomain.prototype.suggest = function (args, optionsOrCb, cb) {
        var command = new SuggestCommand(args);
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
    CloudSearchDomain.prototype.uploadDocuments = function (args, optionsOrCb, cb) {
        var command = new UploadDocumentsCommand(args);
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
    return CloudSearchDomain;
}(CloudSearchDomainClient));
export { CloudSearchDomain };
//# sourceMappingURL=CloudSearchDomain.js.map