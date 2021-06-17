import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { CreateChangesetRequest, CreateChangesetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateChangesetCommandInput extends CreateChangesetRequest {
}
export interface CreateChangesetCommandOutput extends CreateChangesetResponse, __MetadataBearer {
}
/**
 * <p>Creates a new changeset in a FinSpace dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreateChangesetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreateChangesetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new CreateChangesetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChangesetCommandInput} for command's `input` shape.
 * @see {@link CreateChangesetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateChangesetCommand extends $Command<CreateChangesetCommandInput, CreateChangesetCommandOutput, FinspaceDataClientResolvedConfig> {
    readonly input: CreateChangesetCommandInput;
    constructor(input: CreateChangesetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FinspaceDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateChangesetCommandInput, CreateChangesetCommandOutput>;
    private serialize;
    private deserialize;
}
