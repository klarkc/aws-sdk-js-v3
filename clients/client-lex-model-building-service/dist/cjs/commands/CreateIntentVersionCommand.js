"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntentVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new version of an intent based on the
 *         <code>$LATEST</code> version of the intent. If the <code>$LATEST</code>
 *       version of this intent hasn't changed since you last updated it, Amazon Lex
 *       doesn't create a new version. It returns the last version you
 *       created.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the
 *         intent. You can't update the numbered versions that you create with the
 *           <code>CreateIntentVersion</code> operation.</p>
 *          </note>
 *          <p> When you create a version of an intent, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p>This operation requires permissions to perform the
 *         <code>lex:CreateIntentVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateIntentVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateIntentVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateIntentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntentVersionCommandInput} for command's `input` shape.
 * @see {@link CreateIntentVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateIntentVersionCommand extends smithy_client_1.Command {
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
        const commandName = "CreateIntentVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateIntentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateIntentVersionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateIntentVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateIntentVersionCommand(output, context);
    }
}
exports.CreateIntentVersionCommand = CreateIntentVersionCommand;
//# sourceMappingURL=CreateIntentVersionCommand.js.map