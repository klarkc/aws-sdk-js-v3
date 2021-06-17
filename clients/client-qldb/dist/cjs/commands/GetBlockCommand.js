"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlockCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a block object at a specified address in a journal. Also returns a proof of the
 *          specified block for verification if <code>DigestTipAddress</code> is provided.</p>
 *          <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the
 *             <i>Amazon QLDB Developer Guide</i>.</p>
 *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
 *             <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>If no block exists with the specified address, then throws
 *             <code>InvalidParameterException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetBlockCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetBlockCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlockCommandInput} for command's `input` shape.
 * @see {@link GetBlockCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetBlockCommand extends smithy_client_1.Command {
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
        const clientName = "QLDBClient";
        const commandName = "GetBlockCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetBlockResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetBlockCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetBlockCommand(output, context);
    }
}
exports.GetBlockCommand = GetBlockCommand;
//# sourceMappingURL=GetBlockCommand.js.map