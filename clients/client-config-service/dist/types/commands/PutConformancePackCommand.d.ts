import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConformancePackRequest, PutConformancePackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutConformancePackCommandInput extends PutConformancePackRequest {
}
export interface PutConformancePackCommandOutput extends PutConformancePackResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p>
 * 		       <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
 * 		The service linked role is created only when the role does not exist in your account. </p>
 * 		       <note>
 *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutConformancePackCommand extends $Command<PutConformancePackCommandInput, PutConformancePackCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutConformancePackCommandInput;
    constructor(input: PutConformancePackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConformancePackCommandInput, PutConformancePackCommandOutput>;
    private serialize;
    private deserialize;
}
