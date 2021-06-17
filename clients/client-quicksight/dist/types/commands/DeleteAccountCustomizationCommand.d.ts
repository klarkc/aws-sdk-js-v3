import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteAccountCustomizationRequest, DeleteAccountCustomizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccountCustomizationCommandInput extends DeleteAccountCustomizationRequest {
}
export interface DeleteAccountCustomizationCommandOutput extends DeleteAccountCustomizationResponse, __MetadataBearer {
}
/**
 * <p>Deletes all Amazon QuickSight customizations in this AWS Region for the specified AWS
 *             account and QuickSight namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccountCustomizationCommand extends $Command<DeleteAccountCustomizationCommandInput, DeleteAccountCustomizationCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteAccountCustomizationCommandInput;
    constructor(input: DeleteAccountCustomizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountCustomizationCommandInput, DeleteAccountCustomizationCommandOutput>;
    private serialize;
    private deserialize;
}
