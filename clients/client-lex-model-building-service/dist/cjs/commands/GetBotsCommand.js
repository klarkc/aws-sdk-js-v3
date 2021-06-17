"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBotsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns bot information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you provide the <code>nameContains</code> field, the
 *           response includes information for the <code>$LATEST</code> version of
 *           all bots whose name contains the specified string.</p>
 *             </li>
 *             <li>
 *                <p>If you don't specify the <code>nameContains</code> field, the
 *           operation returns information about the <code>$LATEST</code> version
 *           of all of your bots.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permission for the <code>lex:GetBots</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotsCommandInput} for command's `input` shape.
 * @see {@link GetBotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetBotsCommand extends smithy_client_1.Command {
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
        const commandName = "GetBotsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetBotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetBotsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetBotsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetBotsCommand(output, context);
    }
}
exports.GetBotsCommand = GetBotsCommand;
//# sourceMappingURL=GetBotsCommand.js.map