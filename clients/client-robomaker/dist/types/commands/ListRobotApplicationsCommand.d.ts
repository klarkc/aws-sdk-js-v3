import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListRobotApplicationsRequest, ListRobotApplicationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRobotApplicationsCommandInput extends ListRobotApplicationsRequest {
}
export interface ListRobotApplicationsCommandOutput extends ListRobotApplicationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of robot application. You can optionally provide filters to retrieve
 *          specific robot applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListRobotApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRobotApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListRobotApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRobotApplicationsCommand extends $Command<ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListRobotApplicationsCommandInput;
    constructor(input: ListRobotApplicationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
