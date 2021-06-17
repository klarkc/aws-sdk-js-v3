import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetLayerVersionRequest, GetLayerVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLayerVersionCommandInput extends GetLayerVersionRequest {
}
export interface GetLayerVersionCommandOutput extends GetLayerVersionResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>, with a link to download the layer archive
 *         that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLayerVersionCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLayerVersionCommand extends $Command<GetLayerVersionCommandInput, GetLayerVersionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetLayerVersionCommandInput;
    constructor(input: GetLayerVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLayerVersionCommandInput, GetLayerVersionCommandOutput>;
    private serialize;
    private deserialize;
}
