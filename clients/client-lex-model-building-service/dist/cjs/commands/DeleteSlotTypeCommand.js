"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSlotTypeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes all versions of the slot type, including the
 *         <code>$LATEST</code> version. To delete a specific version of the slot
 *       type, use the <a>DeleteSlotTypeVersion</a> operation.</p>
 *          <p> You can delete a version of a slot type only if it is not
 *       referenced. To delete a slot type that is referred to in one or more
 *       intents, you must remove those references first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception,
 *         the exception provides an example reference that shows the intent where
 *         the slot type is referenced. To remove the reference to the slot type,
 *         either update the intent or delete it. If you get the same exception
 *         when you attempt to delete the slot type again, repeat until the slot
 *         type has no references and the <code>DeleteSlotType</code> call is
 *         successful. </p>
 *          </note>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteSlotTypeCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteSlotTypeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteSlotTypeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteSlotTypeCommand(output, context);
    }
}
exports.DeleteSlotTypeCommand = DeleteSlotTypeCommand;
//# sourceMappingURL=DeleteSlotTypeCommand.js.map