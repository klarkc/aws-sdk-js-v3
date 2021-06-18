"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsForResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieve a list of the tags (keys and values) that are associated with a specified
 *          application. A <i>tag</i> is a label that you optionally define and associate
 *          with an application. Each tag consists of a required <i>tag key</i> and an
 *          optional associated <i>tag value</i>. A tag key is a general label that
 *          acts as a category for more specific tag values. A tag value acts as a descriptor within
 *          a tag key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListTagsForResourceCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListTagsForResourceCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListTagsForResourceCommand extends smithy_client_1.Command {
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
    const clientName = "ApplicationInsightsClient";
    const commandName = "ListTagsForResourceCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ListTagsForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ListTagsForResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1ListTagsForResourceCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1ListTagsForResourceCommand(output, context);
  }
}
exports.ListTagsForResourceCommand = ListTagsForResourceCommand;
//# sourceMappingURL=ListTagsForResourceCommand.js.map
