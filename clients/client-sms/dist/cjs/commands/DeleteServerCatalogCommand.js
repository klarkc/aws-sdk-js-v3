"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteServerCatalogCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes all servers from your server catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteServerCatalogCommand extends smithy_client_1.Command {
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
        const clientName = "SMSClient";
        const commandName = "DeleteServerCatalogCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteServerCatalogRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteServerCatalogResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteServerCatalogCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteServerCatalogCommand(output, context);
    }
}
exports.DeleteServerCatalogCommand = DeleteServerCatalogCommand;
//# sourceMappingURL=DeleteServerCatalogCommand.js.map