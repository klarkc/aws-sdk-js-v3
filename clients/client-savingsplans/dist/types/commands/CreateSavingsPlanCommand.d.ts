import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { CreateSavingsPlanRequest, CreateSavingsPlanResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSavingsPlanCommandInput extends CreateSavingsPlanRequest {
}
export interface CreateSavingsPlanCommandOutput extends CreateSavingsPlanResponse, __MetadataBearer {
}
/**
 * <p>Creates a Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, CreateSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, CreateSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new CreateSavingsPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link CreateSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSavingsPlanCommand extends $Command<CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput, SavingsplansClientResolvedConfig> {
    readonly input: CreateSavingsPlanCommandInput;
    constructor(input: CreateSavingsPlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SavingsplansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput>;
    private serialize;
    private deserialize;
}
