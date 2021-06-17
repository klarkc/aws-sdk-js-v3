import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateAccountCustomizationRequest, UpdateAccountCustomizationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAccountCustomizationCommandInput extends UpdateAccountCustomizationRequest {
}
export interface UpdateAccountCustomizationCommandOutput extends UpdateAccountCustomizationResponse, __MetadataBearer {
}
/**
 * <p>Updates Amazon QuickSight customizations the current AWS Region. Currently, the only
 *             customization you can use is a theme.</p>
 *         <p>You can use customizations for your AWS account or, if you specify a namespace, for a
 *             QuickSight namespace instead. Customizations that apply to a namespace override
 *             customizations that apply to an AWS account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAccountCustomizationCommand extends $Command<UpdateAccountCustomizationCommandInput, UpdateAccountCustomizationCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateAccountCustomizationCommandInput;
    constructor(input: UpdateAccountCustomizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccountCustomizationCommandInput, UpdateAccountCustomizationCommandOutput>;
    private serialize;
    private deserialize;
}
