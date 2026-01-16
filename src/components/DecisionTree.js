import React, { useState } from 'react';
import './DecisionTree.css';
import { decisionTree } from '../data/decisionTree';

const DecisionTree = () => {
  const [currentNode, setCurrentNode] = useState(decisionTree);
  const [history, setHistory] = useState([decisionTree]);
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  const handleOptionClick = (option) => {
    if (option.outcome) {
      // Đây là node cuối cùng
      setFinalResult(option);
      setShowResult(true);
    } else if (option.options && option.options.length > 0) {
      // Đây là node trung gian, di chuyển xuống
      const newHistory = [...history, option];
      setHistory(newHistory);
      setCurrentNode(option);
    } else {
      // Node không có options, có thể là kết thúc
      setFinalResult(option);
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentNode(newHistory[newHistory.length - 1]);
      setShowResult(false);
      setFinalResult(null);
    }
  };

  const handleReset = () => {
    setCurrentNode(decisionTree);
    setHistory([decisionTree]);
    setShowResult(false);
    setFinalResult(null);
  };

  const getOutcomeClass = (outcome) => {
    switch (outcome) {
      case 'Good':
        return 'outcome-good';
      case 'Bad':
        return 'outcome-bad';
      case 'Neutral':
        return 'outcome-neutral';
      default:
        return '';
    }
  };

  const getOutcomeEmoji = (outcome) => {
    switch (outcome) {
      case 'Good':
        return '✅';
      case 'Bad':
        return '❌';
      case 'Neutral':
        return '⚖️';
      default:
        return '';
    }
  };

  return (
    <div className="decision-tree-container">
      <div className="tree-content">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          {history.map((node, index) => (
            <React.Fragment key={node.id}>
              <span 
                className={`breadcrumb-item ${index === history.length - 1 ? 'active' : ''}`}
                onClick={() => {
                  if (index < history.length - 1) {
                    const newHistory = history.slice(0, index + 1);
                    setHistory(newHistory);
                    setCurrentNode(newHistory[newHistory.length - 1]);
                    setShowResult(false);
                    setFinalResult(null);
                  }
                }}
              >
                {node.title}
              </span>
              {index < history.length - 1 && <span className="breadcrumb-separator">→</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Current Node */}
        <div className="current-node">
          <h2 className="node-title">{currentNode.title}</h2>
          {currentNode.description && (
            <p className="node-description">{currentNode.description}</p>
          )}

          {/* Theory Section */}
          {currentNode.theory && (
            <div className="theory-section">
              <h3 className="theory-title">📚 Lý thuyết liên quan:</h3>
              {typeof currentNode.theory === 'string' ? (
                <div className="theory-content">
                  <p>{currentNode.theory}</p>
                </div>
              ) : (
                <div className="theory-content">
                  <h4>{currentNode.theory.title}</h4>
                  {currentNode.theory.sections && currentNode.theory.sections.map((section, index) => (
                    <div key={index} className="theory-item">
                      <h5>{section.title}</h5>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Result Screen */}
        {showResult && finalResult && (
          <div className={`result-screen ${getOutcomeClass(finalResult.outcome)}`}>
            <div className="result-icon">
              {getOutcomeEmoji(finalResult.outcome)}
            </div>
            <h2 className="result-title">{finalResult.title}</h2>
            <p className="result-description">{finalResult.result || finalResult.description}</p>
            <div className="result-actions">
              <button className="btn btn-secondary" onClick={handleBack}>
                Quay lại
              </button>
              <button className="btn btn-primary" onClick={handleReset}>
                Bắt đầu lại
              </button>
            </div>
          </div>
        )}

        {/* Options */}
        {!showResult && currentNode.options && currentNode.options.length > 0 && (
          <div className="options-container">
            <div className="options-grid">
              {currentNode.options.map((option, index) => (
                <div
                  key={option.id}
                  className={`option-card ${option.outcome ? `option-${option.outcome.toLowerCase()}` : ''}`}
                  onClick={() => handleOptionClick(option)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="option-icon">
                    {option.outcome === 'Good' && '✅'}
                    {option.outcome === 'Bad' && '❌'}
                    {option.outcome === 'Neutral' && '⚖️'}
                    {!option.outcome && '👉'}
                  </div>
                  <h3 className="option-title">{option.title}</h3>
                  <p className="option-description">{option.description}</p>
                  {option.outcome && (
                    <div className={`outcome-badge ${getOutcomeClass(option.outcome)}`}>
                      {option.outcome}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        {!showResult && history.length > 1 && (
          <div className="navigation">
            <button className="btn btn-back" onClick={handleBack}>
              ← Quay lại
            </button>
            <button className="btn btn-reset" onClick={handleReset}>
              🔄 Bắt đầu lại
            </button>
          </div>
        )}
      </div>

      {/* Butterfly Effect Animation */}
      <div className="butterfly-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="butterfly" style={{ 
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${10 + i * 2}s`
          }}>🦋</div>
        ))}
      </div>
    </div>
  );
};

export default DecisionTree;

