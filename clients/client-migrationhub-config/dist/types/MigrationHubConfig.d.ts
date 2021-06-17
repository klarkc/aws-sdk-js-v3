import { MigrationHubConfigClient } from "./MigrationHubConfigClient";
import { CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput } from "./commands/CreateHomeRegionControlCommand";
import { DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput } from "./commands/DescribeHomeRegionControlsCommand";
import { GetHomeRegionCommandInput, GetHomeRegionCommandOutput } from "./commands/GetHomeRegionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class MigrationHubConfig extends MigrationHubConfigClient {
    /**
     * <p>This API sets up the home region for the calling account only.</p>
     */
    createHomeRegionControl(args: CreateHomeRegionControlCommandInput, options?: __HttpHandlerOptions): Promise<CreateHomeRegionControlCommandOutput>;
    createHomeRegionControl(args: CreateHomeRegionControlCommandInput, cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void): void;
    createHomeRegionControl(args: CreateHomeRegionControlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void): void;
    /**
     * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
     *       fields.</p>
     */
    describeHomeRegionControls(args: DescribeHomeRegionControlsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHomeRegionControlsCommandOutput>;
    describeHomeRegionControls(args: DescribeHomeRegionControlsCommandInput, cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void): void;
    describeHomeRegionControls(args: DescribeHomeRegionControlsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void): void;
    /**
     * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
     *       services to determine the regional endpoint for calling AWS Application Discovery Service and
     *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
     *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
     *       Migration Hub home region.</p>
     */
    getHomeRegion(args: GetHomeRegionCommandInput, options?: __HttpHandlerOptions): Promise<GetHomeRegionCommandOutput>;
    getHomeRegion(args: GetHomeRegionCommandInput, cb: (err: any, data?: GetHomeRegionCommandOutput) => void): void;
    getHomeRegion(args: GetHomeRegionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetHomeRegionCommandOutput) => void): void;
}
