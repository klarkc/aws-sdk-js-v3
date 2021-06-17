"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudSearchDomain = void 0;
const CloudSearchDomainClient_1 = require("./CloudSearchDomainClient");
const SearchCommand_1 = require("./commands/SearchCommand");
const SuggestCommand_1 = require("./commands/SuggestCommand");
const UploadDocumentsCommand_1 = require("./commands/UploadDocumentsCommand");
/**
 * <p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p>
 *
 *          <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p>
 *          <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>
 */
class CloudSearchDomain extends CloudSearchDomainClient_1.CloudSearchDomainClient {
    search(args, optionsOrCb, cb) {
        const command = new SearchCommand_1.SearchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    suggest(args, optionsOrCb, cb) {
        const command = new SuggestCommand_1.SuggestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    uploadDocuments(args, optionsOrCb, cb) {
        const command = new UploadDocumentsCommand_1.UploadDocumentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.CloudSearchDomain = CloudSearchDomain;
//# sourceMappingURL=CloudSearchDomain.js.map