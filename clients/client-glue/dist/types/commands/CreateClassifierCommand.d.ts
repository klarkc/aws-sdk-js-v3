import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateClassifierRequest, CreateClassifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClassifierCommandInput extends CreateClassifierRequest {
}
export interface CreateClassifierCommandOutput extends CreateClassifierResponse, __MetadataBearer {
}
/**
 * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
 *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
 *       depending on which field of the request is present.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClassifierCommand extends $Command<CreateClassifierCommandInput, CreateClassifierCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateClassifierCommandInput;
    constructor(input: CreateClassifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClassifierCommandInput, CreateClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
