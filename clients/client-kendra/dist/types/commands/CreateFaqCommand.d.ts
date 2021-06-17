import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateFaqRequest, CreateFaqResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFaqCommandInput extends CreateFaqRequest {
}
export interface CreateFaqCommandOutput extends CreateFaqResponse, __MetadataBearer {
}
/**
 * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateFaqCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFaqCommandInput} for command's `input` shape.
 * @see {@link CreateFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFaqCommand extends $Command<CreateFaqCommandInput, CreateFaqCommandOutput, KendraClientResolvedConfig> {
    readonly input: CreateFaqCommandInput;
    constructor(input: CreateFaqCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFaqCommandInput, CreateFaqCommandOutput>;
    private serialize;
    private deserialize;
}
