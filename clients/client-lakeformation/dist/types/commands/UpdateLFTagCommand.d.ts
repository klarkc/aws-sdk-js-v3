import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateLFTagRequest, UpdateLFTagResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLFTagCommandInput extends UpdateLFTagRequest {
}
export interface UpdateLFTagCommandOutput extends UpdateLFTagResponse, __MetadataBearer {
}
/**
 * <p>Updates the list of possible values for the specified tag key. If the tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the tag key's value.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new UpdateLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLFTagCommandInput} for command's `input` shape.
 * @see {@link UpdateLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLFTagCommand extends $Command<UpdateLFTagCommandInput, UpdateLFTagCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: UpdateLFTagCommandInput;
    constructor(input: UpdateLFTagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLFTagCommandInput, UpdateLFTagCommandOutput>;
    private serialize;
    private deserialize;
}
