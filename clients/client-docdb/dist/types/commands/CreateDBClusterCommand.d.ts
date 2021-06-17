import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBClusterCommandInput extends CreateDBClusterMessage {
}
export interface CreateDBClusterCommandOutput extends CreateDBClusterResult, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon DocumentDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBClusterCommand extends $Command<CreateDBClusterCommandInput, CreateDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CreateDBClusterCommandInput;
    constructor(input: CreateDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
