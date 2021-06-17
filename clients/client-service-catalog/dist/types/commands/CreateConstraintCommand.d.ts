import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateConstraintInput, CreateConstraintOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConstraintCommandInput extends CreateConstraintInput {
}
export interface CreateConstraintCommandOutput extends CreateConstraintOutput, __MetadataBearer {
}
/**
 * <p>Creates a constraint.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConstraintCommandInput} for command's `input` shape.
 * @see {@link CreateConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConstraintCommand extends $Command<CreateConstraintCommandInput, CreateConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateConstraintCommandInput;
    constructor(input: CreateConstraintCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConstraintCommandInput, CreateConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
