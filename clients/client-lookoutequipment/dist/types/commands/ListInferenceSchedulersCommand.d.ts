import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListInferenceSchedulersRequest, ListInferenceSchedulersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInferenceSchedulersCommandInput extends ListInferenceSchedulersRequest {
}
export interface ListInferenceSchedulersCommandOutput extends ListInferenceSchedulersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of all inference schedulers currently available for your account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceSchedulersCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceSchedulersCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListInferenceSchedulersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInferenceSchedulersCommandInput} for command's `input` shape.
 * @see {@link ListInferenceSchedulersCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInferenceSchedulersCommand extends $Command<ListInferenceSchedulersCommandInput, ListInferenceSchedulersCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: ListInferenceSchedulersCommandInput;
    constructor(input: ListInferenceSchedulersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInferenceSchedulersCommandInput, ListInferenceSchedulersCommandOutput>;
    private serialize;
    private deserialize;
}
