import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { TestRenderEmailTemplateRequest, TestRenderEmailTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestRenderEmailTemplateCommandInput extends TestRenderEmailTemplateRequest {
}
export interface TestRenderEmailTemplateCommandOutput extends TestRenderEmailTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a preview of the MIME content of an email when provided with a template and a
 *             set of replacement data.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, TestRenderEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, TestRenderEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new TestRenderEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRenderEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link TestRenderEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestRenderEmailTemplateCommand extends $Command<TestRenderEmailTemplateCommandInput, TestRenderEmailTemplateCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: TestRenderEmailTemplateCommandInput;
    constructor(input: TestRenderEmailTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestRenderEmailTemplateCommandInput, TestRenderEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
