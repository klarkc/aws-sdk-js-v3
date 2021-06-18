import { __extends } from "tslib";
import { ListSkillsRequest, ListSkillsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSkillsCommand,
  serializeAws_json1_1ListSkillsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all enabled skills in a specific skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListSkillsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSkillsCommandInput} for command's `input` shape.
 * @see {@link ListSkillsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSkillsCommand = /** @class */ (function (_super) {
  __extends(ListSkillsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListSkillsCommand(input) {
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
  ListSkillsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ListSkillsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListSkillsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSkillsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListSkillsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListSkillsCommand(input, context);
  };
  ListSkillsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListSkillsCommand(output, context);
  };
  return ListSkillsCommand;
})($Command);
export { ListSkillsCommand };
//# sourceMappingURL=ListSkillsCommand.js.map
