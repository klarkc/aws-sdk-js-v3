import { __extends } from "tslib";
import { ListInvalidationsRequest, ListInvalidationsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListInvalidationsCommand,
  serializeAws_restXmlListInvalidationsCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists invalidation batches. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListInvalidationsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListInvalidationsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListInvalidationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInvalidationsCommandInput} for command's `input` shape.
 * @see {@link ListInvalidationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInvalidationsCommand = /** @class */ (function (_super) {
  __extends(ListInvalidationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListInvalidationsCommand(input) {
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
  ListInvalidationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListInvalidationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListInvalidationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInvalidationsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListInvalidationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListInvalidationsCommand(input, context);
  };
  ListInvalidationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListInvalidationsCommand(output, context);
  };
  return ListInvalidationsCommand;
})($Command);
export { ListInvalidationsCommand };
//# sourceMappingURL=ListInvalidationsCommand.js.map
