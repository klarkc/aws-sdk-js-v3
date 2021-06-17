import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListProvisionedCapacityInput, ListProvisionedCapacityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisionedCapacityCommandInput extends ListProvisionedCapacityInput {
}
export interface ListProvisionedCapacityCommandOutput extends ListProvisionedCapacityOutput, __MetadataBearer {
}
/**
 * <p>This operation lists the provisioned capacity units for the specified AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisionedCapacityCommand extends $Command<ListProvisionedCapacityCommandInput, ListProvisionedCapacityCommandOutput, GlacierClientResolvedConfig> {
    readonly input: ListProvisionedCapacityCommandInput;
    constructor(input: ListProvisionedCapacityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisionedCapacityCommandInput, ListProvisionedCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
