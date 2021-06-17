import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetConnectorsRequest, GetConnectorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetConnectorsCommandInput extends GetConnectorsRequest {
}
export interface GetConnectorsCommandOutput extends GetConnectorsResponse, __MetadataBearer {
}
/**
 * <p>Describes the connectors registered with the AWS SMS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetConnectorsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetConnectorsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetConnectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectorsCommandInput} for command's `input` shape.
 * @see {@link GetConnectorsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConnectorsCommand extends $Command<GetConnectorsCommandInput, GetConnectorsCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetConnectorsCommandInput;
    constructor(input: GetConnectorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectorsCommandInput, GetConnectorsCommandOutput>;
    private serialize;
    private deserialize;
}
