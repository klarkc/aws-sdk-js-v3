import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreatePartitionRequest, CreatePartitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePartitionCommandInput extends CreatePartitionRequest {
}
export interface CreatePartitionCommandOutput extends CreatePartitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartitionCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePartitionCommand extends $Command<CreatePartitionCommandInput, CreatePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreatePartitionCommandInput;
    constructor(input: CreatePartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartitionCommandInput, CreatePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
