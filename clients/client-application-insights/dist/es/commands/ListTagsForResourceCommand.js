import { __extends } from "tslib";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsForResourceCommand,
  serializeAws_json1_1ListTagsForResourceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListTagsForResourceCommand = /** @class */ (function (_super) {
  __extends(ListTagsForResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTagsForResourceCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  ListTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "ListTagsForResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTagsForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForResourceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTagsForResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListTagsForResourceCommand(input, context);
  };
  ListTagsForResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListTagsForResourceCommand(output, context);
  };
  return ListTagsForResourceCommand;
})($Command);
export { ListTagsForResourceCommand };
//# sourceMappingURL=ListTagsForResourceCommand.js.map
