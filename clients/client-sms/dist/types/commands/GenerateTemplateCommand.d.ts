import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GenerateTemplateRequest, GenerateTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GenerateTemplateCommandInput extends GenerateTemplateRequest {
}
export interface GenerateTemplateCommandOutput extends GenerateTemplateResponse, __MetadataBearer {
}
/**
 * <p>Generates an AWS CloudFormation template based on the current launch configuration and writes it to
 *             an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateTemplateCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateTemplateCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GenerateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateTemplateCommandInput} for command's `input` shape.
 * @see {@link GenerateTemplateCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateTemplateCommand extends $Command<GenerateTemplateCommandInput, GenerateTemplateCommandOutput, SMSClientResolvedConfig> {
    readonly input: GenerateTemplateCommandInput;
    constructor(input: GenerateTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateTemplateCommandInput, GenerateTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
