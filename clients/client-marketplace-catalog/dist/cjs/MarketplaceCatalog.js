"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceCatalog = void 0;
const MarketplaceCatalogClient_1 = require("./MarketplaceCatalogClient");
const CancelChangeSetCommand_1 = require("./commands/CancelChangeSetCommand");
const DescribeChangeSetCommand_1 = require("./commands/DescribeChangeSetCommand");
const DescribeEntityCommand_1 = require("./commands/DescribeEntityCommand");
const ListChangeSetsCommand_1 = require("./commands/ListChangeSetsCommand");
const ListEntitiesCommand_1 = require("./commands/ListEntitiesCommand");
const StartChangeSetCommand_1 = require("./commands/StartChangeSetCommand");
/**
 * <p>Catalog API actions allow you to manage your entities through list, describe, and update
 *             capabilities. An entity can be a product or an offer on AWS Marketplace. </p>
 *
 *         <p>You can automate your entity update process by integrating the AWS Marketplace Catalog
 *             API with your AWS Marketplace product build or deployment pipelines. You can also create
 *             your own applications on top of the Catalog API to manage your products on AWS
 *             Marketplace.</p>
 */
class MarketplaceCatalog extends MarketplaceCatalogClient_1.MarketplaceCatalogClient {
    cancelChangeSet(args, optionsOrCb, cb) {
        const command = new CancelChangeSetCommand_1.CancelChangeSetCommand(args);
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
    describeChangeSet(args, optionsOrCb, cb) {
        const command = new DescribeChangeSetCommand_1.DescribeChangeSetCommand(args);
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
    describeEntity(args, optionsOrCb, cb) {
        const command = new DescribeEntityCommand_1.DescribeEntityCommand(args);
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
    listChangeSets(args, optionsOrCb, cb) {
        const command = new ListChangeSetsCommand_1.ListChangeSetsCommand(args);
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
    listEntities(args, optionsOrCb, cb) {
        const command = new ListEntitiesCommand_1.ListEntitiesCommand(args);
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
    startChangeSet(args, optionsOrCb, cb) {
        const command = new StartChangeSetCommand_1.StartChangeSetCommand(args);
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
exports.MarketplaceCatalog = MarketplaceCatalog;
//# sourceMappingURL=MarketplaceCatalog.js.map