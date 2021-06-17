import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { CreateProfileJobRequest, CreateProfileJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProfileJobCommandInput extends CreateProfileJobRequest {
}
export interface CreateProfileJobCommandOutput extends CreateProfileJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a new job to analyze a dataset and create its data profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateProfileJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfileJobCommandInput} for command's `input` shape.
 * @see {@link CreateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProfileJobCommand extends $Command<CreateProfileJobCommandInput, CreateProfileJobCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: CreateProfileJobCommandInput;
    constructor(input: CreateProfileJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProfileJobCommandInput, CreateProfileJobCommandOutput>;
    private serialize;
    private deserialize;
}
