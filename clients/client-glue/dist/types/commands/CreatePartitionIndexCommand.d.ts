import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreatePartitionIndexRequest, CreatePartitionIndexResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePartitionIndexCommandInput extends CreatePartitionIndexRequest {
}
export interface CreatePartitionIndexCommandOutput extends CreatePartitionIndexResponse, __MetadataBearer {
}
/**
 * <p>Creates a specified partition index in an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreatePartitionIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePartitionIndexCommand extends $Command<CreatePartitionIndexCommandInput, CreatePartitionIndexCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreatePartitionIndexCommandInput;
    constructor(input: CreatePartitionIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartitionIndexCommandInput, CreatePartitionIndexCommandOutput>;
    private serialize;
    private deserialize;
}
