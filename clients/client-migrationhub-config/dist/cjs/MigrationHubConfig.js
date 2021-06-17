"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationHubConfig = void 0;
const MigrationHubConfigClient_1 = require("./MigrationHubConfigClient");
const CreateHomeRegionControlCommand_1 = require("./commands/CreateHomeRegionControlCommand");
const DescribeHomeRegionControlsCommand_1 = require("./commands/DescribeHomeRegionControlsCommand");
const GetHomeRegionCommand_1 = require("./commands/GetHomeRegionCommand");
/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <ul>
 *             <li>
 *                <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *           import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
 *           error is returned.</p>
 *             </li>
 *             <li>
 *                <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of
 *           your home region.</p>
 *             </li>
 *             <li>
 *                <p>If you call a write API outside the home region, an <code>InvalidInputException</code>
 *           is returned.</p>
 *             </li>
 *             <li>
 *                <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub
 *           home region.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 */
class MigrationHubConfig extends MigrationHubConfigClient_1.MigrationHubConfigClient {
    createHomeRegionControl(args, optionsOrCb, cb) {
        const command = new CreateHomeRegionControlCommand_1.CreateHomeRegionControlCommand(args);
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
    describeHomeRegionControls(args, optionsOrCb, cb) {
        const command = new DescribeHomeRegionControlsCommand_1.DescribeHomeRegionControlsCommand(args);
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
    getHomeRegion(args, optionsOrCb, cb) {
        const command = new GetHomeRegionCommand_1.GetHomeRegionCommand(args);
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
exports.MigrationHubConfig = MigrationHubConfig;
//# sourceMappingURL=MigrationHubConfig.js.map