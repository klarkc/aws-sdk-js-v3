"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutStudioMembersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Add/update users with given persona to studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, PutStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, PutStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new PutStudioMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStudioMembersCommandInput} for command's `input` shape.
 * @see {@link PutStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutStudioMembersCommand extends smithy_client_1.Command {
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
        const clientName = "NimbleClient";
        const commandName = "PutStudioMembersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutStudioMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutStudioMembersResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutStudioMembersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutStudioMembersCommand(output, context);
    }
}
exports.PutStudioMembersCommand = PutStudioMembersCommand;
//# sourceMappingURL=PutStudioMembersCommand.js.map