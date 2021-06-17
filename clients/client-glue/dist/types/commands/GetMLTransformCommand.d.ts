import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformRequest, GetMLTransformResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMLTransformCommandInput extends GetMLTransformRequest {
}
export interface GetMLTransformCommandOutput extends GetMLTransformResponse, __MetadataBearer {
}
/**
 * <p>Gets an AWS Glue machine learning transform artifact and all its corresponding metadata.
 *       Machine learning transforms are a special type of transform that use machine learning to learn
 *       the details of the transformation to be performed by learning from examples provided by
 *       humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by
 *       calling <code>GetMLTransform</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTransformCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMLTransformCommand extends $Command<GetMLTransformCommandInput, GetMLTransformCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMLTransformCommandInput;
    constructor(input: GetMLTransformCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLTransformCommandInput, GetMLTransformCommandOutput>;
    private serialize;
    private deserialize;
}
