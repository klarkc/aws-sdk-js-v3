"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListXssMatchSetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>XssMatchSet</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListXssMatchSetsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListXssMatchSetsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListXssMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListXssMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListXssMatchSetsCommand extends smithy_client_1.Command {
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
        const clientName = "WAFClient";
        const commandName = "ListXssMatchSetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListXssMatchSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListXssMatchSetsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListXssMatchSetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListXssMatchSetsCommand(output, context);
    }
}
exports.ListXssMatchSetsCommand = ListXssMatchSetsCommand;
//# sourceMappingURL=ListXssMatchSetsCommand.js.map