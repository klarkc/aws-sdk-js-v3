import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateHITTypeOfHITCommandInput extends UpdateHITTypeOfHITRequest {
}
export interface UpdateHITTypeOfHITCommandOutput extends UpdateHITTypeOfHITResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>UpdateHITTypeOfHIT</code>
 *             operation allows you to change the HITType properties of a HIT. This
 *             operation disassociates the HIT from its old HITType properties and
 *             associates it with the new HITType properties. The HIT takes on the
 *             properties of the new HITType in place of the old ones.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITTypeOfHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITTypeOfHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateHITTypeOfHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHITTypeOfHITCommandInput} for command's `input` shape.
 * @see {@link UpdateHITTypeOfHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateHITTypeOfHITCommand extends $Command<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateHITTypeOfHITCommandInput;
    constructor(input: UpdateHITTypeOfHITCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput>;
    private serialize;
    private deserialize;
}
