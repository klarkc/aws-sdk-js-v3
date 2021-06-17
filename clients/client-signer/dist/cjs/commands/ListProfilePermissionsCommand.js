"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProfilePermissionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the cross-account permissions associated with a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListProfilePermissionsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListProfilePermissionsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListProfilePermissionsCommand extends smithy_client_1.Command {
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
        const clientName = "SignerClient";
        const commandName = "ListProfilePermissionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListProfilePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListProfilePermissionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListProfilePermissionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListProfilePermissionsCommand(output, context);
    }
}
exports.ListProfilePermissionsCommand = ListProfilePermissionsCommand;
//# sourceMappingURL=ListProfilePermissionsCommand.js.map