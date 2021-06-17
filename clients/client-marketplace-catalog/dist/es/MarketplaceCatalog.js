import { __extends } from "tslib";
import { MarketplaceCatalogClient } from "./MarketplaceCatalogClient";
import { CancelChangeSetCommand, } from "./commands/CancelChangeSetCommand";
import { DescribeChangeSetCommand, } from "./commands/DescribeChangeSetCommand";
import { DescribeEntityCommand, } from "./commands/DescribeEntityCommand";
import { ListChangeSetsCommand, } from "./commands/ListChangeSetsCommand";
import { ListEntitiesCommand, } from "./commands/ListEntitiesCommand";
import { StartChangeSetCommand, } from "./commands/StartChangeSetCommand";
/**
 * <p>Catalog API actions allow you to manage your entities through list, describe, and update
 *             capabilities. An entity can be a product or an offer on AWS Marketplace. </p>
 *
 *         <p>You can automate your entity update process by integrating the AWS Marketplace Catalog
 *             API with your AWS Marketplace product build or deployment pipelines. You can also create
 *             your own applications on top of the Catalog API to manage your products on AWS
 *             Marketplace.</p>
 */
var MarketplaceCatalog = /** @class */ (function (_super) {
    __extends(MarketplaceCatalog, _super);
    function MarketplaceCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketplaceCatalog.prototype.cancelChangeSet = function (args, optionsOrCb, cb) {
        var command = new CancelChangeSetCommand(args);
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
    MarketplaceCatalog.prototype.describeChangeSet = function (args, optionsOrCb, cb) {
        var command = new DescribeChangeSetCommand(args);
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
    MarketplaceCatalog.prototype.describeEntity = function (args, optionsOrCb, cb) {
        var command = new DescribeEntityCommand(args);
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
    MarketplaceCatalog.prototype.listChangeSets = function (args, optionsOrCb, cb) {
        var command = new ListChangeSetsCommand(args);
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
    MarketplaceCatalog.prototype.listEntities = function (args, optionsOrCb, cb) {
        var command = new ListEntitiesCommand(args);
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
    MarketplaceCatalog.prototype.startChangeSet = function (args, optionsOrCb, cb) {
        var command = new StartChangeSetCommand(args);
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
    return MarketplaceCatalog;
}(MarketplaceCatalogClient));
export { MarketplaceCatalog };
//# sourceMappingURL=MarketplaceCatalog.js.map