import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateComponentCommandInput extends CreateComponentRequest {
}
export interface CreateComponentCommandOutput extends CreateComponentResponse, __MetadataBearer {
}
/**
 * <p>Creates a new component that can be used to build, validate, test, and assess your
 *       image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComponentCommandInput} for command's `input` shape.
 * @see {@link CreateComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateComponentCommand extends $Command<CreateComponentCommandInput, CreateComponentCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateComponentCommandInput;
    constructor(input: CreateComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateComponentCommandInput, CreateComponentCommandOutput>;
    private serialize;
    private deserialize;
}
