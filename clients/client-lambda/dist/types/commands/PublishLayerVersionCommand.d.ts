import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { PublishLayerVersionRequest, PublishLayerVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PublishLayerVersionCommandInput extends PublishLayerVersionRequest {
}
export interface PublishLayerVersionCommandOutput extends PublishLayerVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same
 *       layer name, a new version is created.</p>
 *          <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PublishLayerVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishLayerVersionCommandInput} for command's `input` shape.
 * @see {@link PublishLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PublishLayerVersionCommand extends $Command<PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: PublishLayerVersionCommandInput;
    constructor(input: PublishLayerVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput>;
    private serialize;
    private deserialize;
}
