import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppRequest, GetAppResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppCommandInput extends GetAppRequest {
}
export interface GetAppCommandOutput extends GetAppResponse, __MetadataBearer {
}
/**
 * <p>Retrieve information about the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppCommandInput} for command's `input` shape.
 * @see {@link GetAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppCommand extends $Command<GetAppCommandInput, GetAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppCommandInput;
    constructor(input: GetAppCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppCommandInput, GetAppCommandOutput>;
    private serialize;
    private deserialize;
}
