"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSlotTypeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a custom slot type or replaces an existing custom slot
 *       type.</p>
 *          <p>To create a custom slot type, specify a name for the slot type and
 *       a set of enumeration values, which are the values that a slot of this type
 *       can assume. For more information, see <a>how-it-works</a>.</p>
 *          <p>If you specify the name of an existing slot type, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the slot type. Amazon Lex removes the fields that you don't provide in the
 *       request. If you don't specify required fields, Amazon Lex throws an exception.
 *       When you update the <code>$LATEST</code> version of a slot type, if a bot
 *       uses the <code>$LATEST</code> version of an intent that contains the slot
 *       type, the bot's <code>status</code> field is set to
 *       <code>NOT_BUILT</code>.</p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:PutSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSlotTypeCommandInput} for command's `input` shape.
 * @see {@link PutSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutSlotTypeCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LexModelBuildingServiceClient";
        const commandName = "PutSlotTypeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutSlotTypeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutSlotTypeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutSlotTypeCommand(output, context);
    }
}
exports.PutSlotTypeCommand = PutSlotTypeCommand;
//# sourceMappingURL=PutSlotTypeCommand.js.map