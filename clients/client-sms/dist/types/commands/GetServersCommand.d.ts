import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetServersRequest, GetServersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServersCommandInput extends GetServersRequest {
}
export interface GetServersCommandOutput extends GetServersResponse, __MetadataBearer {
}
/**
 * <p>Describes the servers in your server catalog.</p>
 *         <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetServersCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetServersCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServersCommandInput} for command's `input` shape.
 * @see {@link GetServersCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServersCommand extends $Command<GetServersCommandInput, GetServersCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetServersCommandInput;
    constructor(input: GetServersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServersCommandInput, GetServersCommandOutput>;
    private serialize;
    private deserialize;
}
