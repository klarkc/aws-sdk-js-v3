import { __extends } from "tslib";
import { ListPolicyGenerationsRequest, ListPolicyGenerationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListPolicyGenerationsCommand,
  serializeAws_restJson1ListPolicyGenerationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the policy generations requested in the last seven days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListPolicyGenerationsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListPolicyGenerationsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListPolicyGenerationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyGenerationsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPolicyGenerationsCommand = /** @class */ (function (_super) {
  __extends(ListPolicyGenerationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPolicyGenerationsCommand(input) {
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
  ListPolicyGenerationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ListPolicyGenerationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPolicyGenerationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyGenerationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPolicyGenerationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListPolicyGenerationsCommand(input, context);
  };
  ListPolicyGenerationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListPolicyGenerationsCommand(output, context);
  };
  return ListPolicyGenerationsCommand;
})($Command);
export { ListPolicyGenerationsCommand };
//# sourceMappingURL=ListPolicyGenerationsCommand.js.map
