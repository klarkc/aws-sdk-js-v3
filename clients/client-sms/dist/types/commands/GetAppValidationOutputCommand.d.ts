import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppValidationOutputRequest, GetAppValidationOutputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppValidationOutputCommandInput extends GetAppValidationOutputRequest {
}
export interface GetAppValidationOutputCommandOutput extends GetAppValidationOutputResponse, __MetadataBearer {
}
/**
 * <p>Retrieves output from validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppValidationOutputCommand extends $Command<GetAppValidationOutputCommandInput, GetAppValidationOutputCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppValidationOutputCommandInput;
    constructor(input: GetAppValidationOutputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppValidationOutputCommandInput, GetAppValidationOutputCommandOutput>;
    private serialize;
    private deserialize;
}
